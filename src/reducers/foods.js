var initialState = [
    {
        foodID: 1,
        foodName: "Thuoc La",
        hits: 5,
        img: "food2.jpg",
        ingres: "Giá, thịt",
        parentID: 3,
        price: "300000",
        rating: "4.9"
    },
    {
        foodID: 2,
        foodName: "Thuoc La",
        hits: 5,
        img: "food2.jpg",
        ingres: "Giá, thịt",
        parentID: 3,
        price: "300000",
        rating: "4.9"
    }
];

const foods = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default foods;