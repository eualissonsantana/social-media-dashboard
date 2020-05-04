function changeTheme(e){
    
    var b =  document.getElementsByTagName('body')

    for (let i in b) {
        if(e.checked == true){
            b[i].setAttribute('id', 'light-theme')
        }else {
            b[i].setAttribute('id', 'dark-theme')
        }  
    }
}
   