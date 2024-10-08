  const image = document.getElementById("image1");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.addEventListener("click", function() {
    if(image.src.includes("https://www.innomatics.in/wp-content/uploads/2023/12/mb-banner.jpg")) {
      image.src = "https://www.innomatics.in/wp-content/uploads/2023/01/AWARD-PAGE.jpg" // Change to the second image
    } else {
      image.src = "https://www.innomatics.in/wp-content/uploads/2023/12/mb-banner.jpg"  // Revert back to the first image
    }
  });
