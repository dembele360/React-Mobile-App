export default function formatCurrency(num){
    return"Tsh" + Number(num.toFixed(1)).toLocaleString() + "";
}