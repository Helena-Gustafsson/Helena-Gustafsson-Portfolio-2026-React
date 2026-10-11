import type { ContactFormType } from "../types/ContactFormType";
import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react";

//"" means that all fileds are empty when the form is first loaded.
const initialFormData: ContactFormType = { 
    name: "", 
    email: "", 
    phone: "", 
    subject: "", 
    message: "", 
};

//? means that the field is optional. Error for mandatory fields are 
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
      <h3>Skicka meddelande</h3>
      <p>Fyll i formuläret nedan för att skicka ett meddelande. Alla fält är obligatoriska.</p>

      {isSuccessVisible && (
        <p className="success">Meddelandet har skickats!</p>
      )}
      {isFormErrorVisible && (
    <p className="error">Vänligen fyll i alla obligatoriska fält.</p>
      )}

      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" value={formData.name} onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" value={formData.email} onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="text" name="phone" value={formData.phone} onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.phone && <p className="error">{errors.phone}</p>}

      <label htmlFor="subject">Subject:</label>
      <input id="subject" type="text" name="subject" value={formData.subject} onChange={(e) => handleInputChange(e)}/>
      {isSubmitted && errors.subject && <p className="error">{errors.subject}</p>}

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={(e) => handleInputChange(e)}></textarea>
      {isSubmitted && errors.message && <p className="error">{errors.message}</p>}

      
      <button className="submit-button" type="submit">Skicka meddelande</button>

    </form>
  )
}


export default ContactForm

