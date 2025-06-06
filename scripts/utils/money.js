export function formatCurrency(priceCents) {
   return (priceCents / 100).toFixed(2);
}

export default formatCurrency; //defualt export is for importing the function without the '{}'
//each file can have only one default export