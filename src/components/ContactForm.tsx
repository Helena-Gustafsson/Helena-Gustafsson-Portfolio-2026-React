import type { ContactFormType } from "../types/ContactFormType";
import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react";
import styles from "../styles/ContactForm.module.css";

//"" means that all fileds are empty when the form is first loaded.
const initialFormData: ContactFormType = { 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "", 
};

//? means that the field is optional. Error for mandatory fields are handled in validation logic in handleSubmit function.
type Errors = { 
    name?: string; 
    email?: string; 
    phone?: string; 
    subject?: string; 
    message?: string; 
};

function ContactForm() {

const [formData, setFormData] = useState<ContactFormType>(initialFormData);
const [errors, setErrors] = useState<Errors>({});
const [isSubmitted, setIsSubmitted] = useState(false);
const [isFormErrorVisible, setIsFormErrorVisible] = useState(false);
const [isSuccessVisible, setIsSuccessVisible] = useState(false);

// useEffect timer to hide the error and success messages after 4 seconds
useEffect(() => {
  if (isFormErrorVisible || isSuccessVisible) {
    const timer = setTimeout(() => {
      setIsFormErrorVisible(false);
      setIsSuccessVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }
}, [isFormErrorVisible, isSuccessVisible]);

//Name refers too all name fields in the form (name:name, name:phone, name:type, name:subject, name:message). 
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const fieldName = e.target.name
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    })
    // Clear the errors dynamically for this field using [fieldName]
    setErrors({
      ...errors,
      [fieldName]: undefined
    })
  }

const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)

    const validationErrors: Errors = {}
    if (!formData.name.trim()) validationErrors.name = 'Namn är obligatoriskt.'
    if (!formData.phone.trim()) validationErrors.phone = 'Telefonnummer är obligatoriskt.'
    if (!formData.email.trim()) validationErrors.email = 'Email är obligatoriskt.'
    if (!formData.subject.trim()) validationErrors.subject = 'Ämne är obligatoriskt.'
    if (!formData.message.trim()) validationErrors.message = 'Meddelande är obligatoriskt.' 

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsFormErrorVisible(true)
      setIsSuccessVisible(false)
      return
    }

    setIsFormErrorVisible(false)
    setIsSuccessVisible(true)
    setErrors({})
    setFormData(initialFormData) 
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Skicka meddelande</h3>
      <p className={styles.formInfo}>Fyll i formuläret nedan för att skicka ett meddelande. Alla fält är obligatoriska.</p>

    <div className={styles.formInput}>
      <label htmlFor="name">Namn:</label>
      <input id="name" 
      type="text" name="name" 
      value={formData.name} 
      placeholder="Ange ditt namn"
      onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.name && <p className={styles.error}>{errors.name}</p>}
    </div>

    <div className={styles.formInput}>
      <label htmlFor="email">E-post:</label>
      <input id="email" 
      type="email" name="email" 
      placeholder="Ange din e-post"
      value={formData.email} onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.email && <p className={styles.error}>{errors.email}</p>}
    </div>

    <div className={styles.formInput}>
      <label htmlFor="phone">Telefonnummer:</label>
      <input id="phone" 
      type="text" 
      placeholder="Ange ditt telefonnummer"
      name="phone" 
      value={formData.phone} 
      onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.phone && <p className={styles.error}>{errors.phone}</p>}
    </div>

    <div className={styles.formInput}>
      <label htmlFor="subject">Ämne:</label>
      <select 
        id="subject" 
        name="subject" 
        value={formData.subject} 
        onChange={(e) => handleInputChange(e)} >
        <option value="">Välj ämne</option> 
        <option value="lia">LIA</option>
        <option value="jobb">Jobbmöjlighet</option> 
        <option value="projekt">Fråga om projekt</option> 
        <option value="samarbete">Samarbete</option> 
        <option value="ovrigt">Övrigt</option> 
        </select>
      {isSubmitted && errors.subject && <p className={styles.error}>{errors.subject}</p>}
    </div>

    <div className={styles.formInput}>
      <label htmlFor="message">Meddelande:</label>
      <textarea id="message" 
      placeholder="Skriv ditt meddelande här"
      name="message" 
      value={formData.message} 
      onChange={(e) => handleInputChange(e)}></textarea>
      {isSubmitted && errors.message && <p className={styles.error}>{errors.message}</p>}
    </div>
      
      <button className={styles.submitButton} type="submit">Skicka meddelande</button>

      {isSuccessVisible && (
        <p className={styles.success}>Meddelandet har skickats!</p>
      )}
      {isFormErrorVisible && (
    <p className={styles.error}>Vänligen fyll i alla obligatoriska fält.</p>
      )}

    </form>
  )
}


export default ContactForm

