export const required = value => {
    if(value) return undefined
    return "Поле обязательное"
};

export const maxLengthCreator = (maxLength) =>
    (value) => value && value.length > maxLength ? `Максимальная длина ${maxLength} символов` : undefined;
