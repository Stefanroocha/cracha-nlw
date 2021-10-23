 
  const LinksSocialMedia = { 
    github: 'stefanroocha',
    youtube: 'jakelimygracielly',
    facebook: 'maykbrito',
    instagram: 'stefanroocha',
    twitter: 'stefanroocha'
  }

     function changesSocialMediaLinks() {
       for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`         
      }
     }
      
     changesSocialMediaLinks() 
        
     function getGithubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMedia.github}`
     
     fetch(url)
     .then(Response => Response.json())
     .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login

     })
    
    }
        
    

    getGithubProfileInfos()





      // comentarios
      // i = i + 1 
      // i++
      // ser humano conta 1 2 3 4 5 6 7 8 9 10
      // computador conta 0 1 2 3 4 5 6 7 8 9 
      

      // ARROW FUNCTION
      //function nomedafuncao(argumentos){
          //CODE}

    

       //funcao anonima 
      //argumento => {}
      //nomedafuncao()
     