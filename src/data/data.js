// async function getData() {
//   const url =
//     "https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status : ${response.status}`);
//     }

//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.log(error.message);
//     return [];
//   }
// }

// export default getData;

import axios from "axios";

async function getData() {
  const url = "https://story-api.dicoding.dev/v1/stories";
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        location: 0, // bisa diubah ke 1 jika ingin lokasi
        page: 1,
        size: 10, // jumlah story yang diambil
      },
    });

    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data story:", error.message);
    return { listStory: [] };
  }
}

export default getData;

