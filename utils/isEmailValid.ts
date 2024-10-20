const isEmailValid = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
        let explanation = "";
        if (email === "" || email === " ") {
            explanation = "Email cannot be empty.";
        } else if (!email.includes("@")) {
            explanation = "Email must contain an @ symbol.";
        } else if (!email.includes(".")) {
            explanation = "Email must contain a dot (.) after the @ symbol.";
        } else if (/\s/.test(email)) {
            explanation = "Email must not contain spaces.";
        } else if (!/[a-zA-Z]/.test(email.split('@')[1])) {
            explanation = "Email domain must contain at least one alphabetic character.";
        } else {
            explanation = "Email format is invalid.";
        }
        return [false, explanation];
    } else {
        return [true, null];
    }
};

export default isEmailValid;
