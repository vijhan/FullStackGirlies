import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get("http://localhost:3500/products");
        return response.data;
    } catch (error) {
        console.log("error");
    }
}