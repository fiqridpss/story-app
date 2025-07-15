import "../sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import getData from "../data/data";

// Fetch dengan Axios
import axios from "axios";

// Register Lit components
import "../components/StoryCard.js";
import "../components/StoryHeader.js";
import "../components/StoryFooter.js";
import "../components/StoryModal.js";
import "../components/StoryButton.js";

// Tampil data
const container = document.querySelector("#story-container");
const loading = document.getElementById("loading");

if (container) {
  // Tampilkan loading
  if (loading) loading.style.display = "block";
  container.innerHTML = "";

  getData()
    .then((data) => {
      if (data && data.listStory) {
        data.listStory.forEach(
          ({ name, photoUrl, description, lat, lon, createdAt }) => {
            const card = document.createElement("div");
            card.className = "col-md-4 mb-4";
            card.innerHTML = `
          <story-card 
            name="${name}" 
            photoUrl="${photoUrl}" 
            description="${description}"
            lat="${lat}"
            lon="${lon}" 
            createdAt="${createdAt}">
          </story-card>
        `;
            container.appendChild(card);
          }
        );
      }

      // Sembunyikan loading setelah data selesai dimuat
      if (loading) loading.style.display = "none";
    })
    .catch((err) => {
      console.error("Gagal mengambil data:", err);
      if (loading)
        loading.innerHTML = `<p class="text-danger">Gagal memuat data story.</p>`;
    });
}

// Login dengan Axios
const loginForm = document.getElementById("loginForm");
const loadingSpinner = document.getElementById("loadingSpinner");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginForm.classList.add("was-validated");

    if (!loginForm.checkValidity()) return;

    // Tampilkan spinner
    if (loadingSpinner) loadingSpinner.style.display = "block";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
      const response = await axios.post(
        "https://story-api.dicoding.dev/v1/login",
        { email, password }
      );

      const token = response.data.loginResult.token;
      localStorage.setItem("token", token);

      alert("Login berhasil!");
      window.location.href = "index.html"; // Redirect ke halaman utama
    } catch (error) {
      const msg =
        error.response?.data?.message || "Terjadi kesalahan saat login.";
      document.getElementById("errorMsg").textContent = msg;
    } finally {
      // Sembunyikan spinner apapun hasilnya
      if (loadingSpinner) loadingSpinner.style.display = "none";
    }
  });
}

// Eye Login Password
const togglePasswordBtn = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener("click", () => {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    togglePasswordBtn.textContent = isHidden ? "👁️‍🗨️" : "👁️";
  });
}

// Register dengan Axios
const registerForm = document.getElementById("registerForm");
const registerSpinner = document.getElementById("registerSpinner"); // Ambil spinner

if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    registerForm.classList.add("was-validated");

    if (!registerForm.checkValidity()) return;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Tampilkan spinner
    if (registerSpinner) registerSpinner.style.display = "block";

    try {
      const response = await axios.post(
        "https://story-api.dicoding.dev/v1/register",
        { name, email, password }
      );

      alert("Pendaftaran berhasil! Silakan login.");
      window.location.href = "login.html"; // Redirect ke login
    } catch (error) {
      const msg =
        error.response?.data?.message || "Terjadi kesalahan saat daftar.";
      document.getElementById("errorMsg").textContent = msg;
    } finally {
      // Sembunyikan spinner
      if (registerSpinner) registerSpinner.style.display = "none";
    }
  });
}

// Eye Password Register
const toggleRegisterBtn = document.getElementById("toggleRegisterPassword");
const registerPasswordInput = document.getElementById("password");

if (toggleRegisterBtn && registerPasswordInput) {
  toggleRegisterBtn.addEventListener("click", () => {
    const isHidden = registerPasswordInput.type === "password";
    registerPasswordInput.type = isHidden ? "text" : "password";
    toggleRegisterBtn.textContent = isHidden ? "👁️‍🗨️" : "👁️";
  });
}


// Tambah data dengan Axios
const addStoryForm = document.getElementById("addStoryForm");
const addStorySpinner = document.getElementById("addStorySpinner");
const submitBtn = document.getElementById("submitBtn");

if (addStoryForm) {
  addStoryForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    addStoryForm.classList.add("was-validated");

    if (!addStoryForm.checkValidity()) return;

    const description = document.getElementById("description").value.trim();
    const photo = document.getElementById("photo").files[0];

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Anda belum login.");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("photo", photo);

    // Tampilkan spinner dan disable tombol submit
    if (addStorySpinner) addStorySpinner.style.display = "block";
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await axios.post(
        "https://story-api.dicoding.dev/v1/stories",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Story berhasil ditambahkan!");
      addStoryForm.reset();
      addStoryForm.classList.remove("was-validated");
    } catch (error) {
      const msg = error.response?.data?.message || "Gagal mengunggah story.";
      document.getElementById("errorMsg").textContent = msg;
    } finally {
      // Sembunyikan spinner dan aktifkan kembali tombol
      if (addStorySpinner) addStorySpinner.style.display = "none";
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
