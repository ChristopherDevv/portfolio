export const contactSchema = {
    name(value) {
        if (value) return true
        return 'Name field is required'
    },
    email(value) {
        if (!value) {
          return 'E-mail field is required';
        }
        // si es un email válido
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!regex.test(value)) {
          return 'Email no válido';
        }
        return true;
    },
    description(value) {
        if (value) return true
        return 'Description field is required'
    }
}