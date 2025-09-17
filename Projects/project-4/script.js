document.getElementById("download").addEventListener("click", () => {
  const resume = document.getElementById("resume");
  const options = {
    margin: 0.3 ,
    filename: "Mohit_Arora_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().from(resume).set(options).save();
});
