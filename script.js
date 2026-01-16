const stories = {
  story1: {
    title: "Ang Multo sa Lumang Bahay",
    content: `
    <p>Tahimik ang baryo nang lumipat si Marco sa lumang bahay.</p>
    <p>Tuwing hatinggabi, may naririnig siyang yabag...</p>
    <p><b>Chapter 1 END</b></p>
    <hr>
    <p>🔒 Chapter 2 ay para sa PREMIUM members</p>
    `
  },
  story2: {
    title: "Paano Yumaman sa Maliit na Kita",
    content: `
    <p>Hindi mo kailangan ng malaking sahod para magsimula.</p>
    <p>Ang mahalaga ay disiplina at tamang mindset.</p>
    <p><b>Tip #1:</b> Mag-ipon muna bago gumastos.</p>
    `
  }
};

function openStory(id) {
  localStorage.setItem("currentStory", id);
  window.location.href = "read.html";
}

if (document.getElementById("title")) {
  const id = localStorage.getItem("currentStory");
  document.getElementById("title").innerText = stories[id].title;
  document.getElementById("content").innerHTML = stories[id].content;
}
