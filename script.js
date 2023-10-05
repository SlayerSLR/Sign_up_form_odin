root=document.documentElement;
root.className = 'dark';
function setTheme(){
    newTheme= root.className=== 'dark' ? 'light' : 'dark';
    root.className= newTheme;
}