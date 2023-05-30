export async function fetchProductsData() {
  try {
    const response = await fetch("/data");
    if (!response.ok) {
      setTimeout(() => {
        return fetchProductsData();
      }, 1000);
    }
    const resData = await response.json();
    return resData;
  } catch(ex) {
    setTimeout(() => {
      return fetchProductsData();
    }, 1000);
  }
}