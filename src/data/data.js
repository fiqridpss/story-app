async function getData() {
  const url =
    "https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status : ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

export default getData;
