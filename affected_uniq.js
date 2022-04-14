items = document.getElementsByClassName("project-name")
array = [].map.call(items, item => item.textContent);
uniqarr = [...new Set(array)]
