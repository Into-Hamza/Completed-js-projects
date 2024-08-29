const keys = document.querySelector(".key");
window.addEventListener("keydown",(e)=>{
    keys.innerHTML = 
    ` <table>
    <tr>
      <th>Code</th>
      <th>key</th>
      <th>KeyCode</th>
    </tr>
    <tr>
      <td>${e.code}</td>
      <td>${e.key === ' ' ? e.key = 'Space': e.key}</td>
      <td>${e.keyCode}</td>
    </tr>
  </table>  `
})
   