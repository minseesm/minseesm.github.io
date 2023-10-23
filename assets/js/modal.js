document.querySelectorAll('.snap-open').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.snap-modal').classList.add('open')
        setTimeout(()=> {
            document.querySelector('.snap-modal').classList.add('open-delay')
        }, 200)
        document.body.classList.add("modal-active");
        window.location.hash = 'snap'

    })
})

document.querySelectorAll('.wedding-open').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.wedding-modal').classList.add('open')
        setTimeout(()=> {
            document.querySelector('.wedding-modal').classList.add('open-delay')
        }, 200)
        document.body.classList.add("modal-active");
        window.location.hash = 'wedding'

    })
})

document.querySelectorAll('.package-open').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.package-modal').classList.add('open')
        setTimeout(()=> {
            document.querySelector('.package-modal').classList.add('open-delay')
        }, 200)
        document.body.classList.add("modal-active");
        window.location.hash = 'package'

    })
})

document.querySelectorAll('.video-open').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelector('.video-modal').classList.add('open')
        setTimeout(()=> {
            document.querySelector('.video-modal').classList.add('open-delay')
        }, 200)
        document.body.classList.add("modal-active");
        window.location.hash = 'video'
        document.querySelector('#background-video-monitor').pause();
        document.querySelector('#video-modal-player').play();

    })
})

document.querySelectorAll('.close-modal').forEach(element => {
    element.addEventListener('click', function(e) {
        e.stopPropagation()
        document.body.classList.remove("modal-active");
        document.querySelectorAll('.modal-container').forEach(modal => {
            modal.classList.remove('open')
            modal.classList.remove('open-delay')
            history.replaceState("", "", location.pathname)
            window.location.hash = '';
        })
        document.querySelector('#video-modal-player').pause();
        document.querySelector('#background-video-monitor').play()
    })
})

document.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash) {
        const hash =  window.location.hash.replace('#', '')
        if(hash === 'snap') {
            document.querySelector('.snap-modal').classList.add('open')
            setTimeout(()=> {
                document.querySelector('.snap-modal').classList.add('open-delay')
            }, 200)
            document.body.classList.add("modal-active");
        } else if (hash === 'wedding') {
            document.body.classList.add("modal-active");
            document.querySelector('.wedding-modal').classList.add('open')
            setTimeout(()=> {
                document.querySelector('.wedding-modal').classList.add('open-delay')
            }, 200)
        } else if (hash === 'video') {
            document.body.classList.add("modal-active");
            document.querySelector('.video-modal').classList.add('open')
            setTimeout(()=> {
                document.querySelector('.video-modal').classList.add('open-delay')
            }, 200)
            document.querySelector('#video-modal-player').pause();
        } else if (hash === 'package') {
            document.body.classList.add("modal-active");
            document.querySelector('.package-modal').classList.add('open')
            setTimeout(()=> {
                document.querySelector('.package-modal').classList.add('open-delay')
            }, 200)
        } else {
            document.querySelector('#background-video-monitor').play()
        }
       
    } else {
        document.querySelector('#background-video-monitor').play()
    }
});