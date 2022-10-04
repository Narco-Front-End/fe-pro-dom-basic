export const paintCards = () => {
    const li = document.querySelectorAll('.item');
    li.forEach((item) => item.style.backgroundColor="red");
}

export const findElement = () => {
    document.querySelectorAll('.card');
    document.getElementsByTagName('li');
    document.getElementsByClassName('.card')
};
