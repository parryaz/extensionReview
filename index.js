let myLeads = []
const saveEl = document.getElementById("save-btn")
const tabEl = document.getElementById("tab-btn")
const deleteEl = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("lead"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}




tabEl.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})



function render(leads){
    let listItems = ""
    for( let i = 0 ; i < leads.length ; i++){
        listItems += 
        `<li>
            <a href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)

})


    saveEl.addEventListener("click", function(){
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("lead", JSON.stringify(myLeads))
        render(myLeads)
    })


