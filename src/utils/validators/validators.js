export const required = value => {
    if(value) return undefined
    return "Поле обязательное"
};

// функция возвращает другую функцию
export const maxLengthCreator = (maxLength) =>
    (value) => value && value.length > maxLength ? `Максимальная длина ${maxLength} символов` : undefined;
