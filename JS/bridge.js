// Implementing Simple Content
class SimpleContent {
    getContent() {
        console.log("simple working..");
        return "This is simple content.";
    }
}

// Implementing Complex Content
class ComplexContent {
    getContent() {
        console.log("complex working..");
        return "This is complex content.";
    }
}

// Implementing Themes
class DarkTheme {
    applyTheme() {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

    }
}

class LightTheme {
    applyTheme() {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
}

// Abstraction
class Page {
    constructor(theme) {
        this.theme = theme;
    }

    applyTheme() {
        return this.theme.applyTheme();
    }

    setContent(content) {
        this.content = content;
    }
    
    
    render() {
        const contentContainer = document.getElementById('contentContainer');
        this.applyTheme();
        contentContainer.innerHTML = `<p>${this.content.getContent()}</p>`;
      }
}

function switchTheme(){
    document.getElementById('themeSwitch')?.addEventListener('change', () => {
        const themeSwitch = document.getElementById('themeSwitch');
        const page = new Page(themeSwitch && themeSwitch.checked ? new DarkTheme() : new LightTheme());
        const si= document.getElementById('simpleContent');
        page.setContent(si&& si.checked ?new SimpleContent() :new ComplexContent());
        page.render();});
}

function switchContent(content) {
    const contentContainer = document.getElementById('contentContainer');
   

    if (content === 'simple') {
        contentContainer.innerHTML = `
        <h1> This is a simple content </h1>
            <img src="${themeSwitch.checked ? 'simple-dark-image.gif' : 'simple-light-image.gif'}" alt="Simple Content Image" class="content-image">
            <p>This is a simple content paragraph.</p>
        `;
    } else if (content === 'complex') {
        contentContainer.innerHTML = `
        <h1>This is a complex content</h1>
            <img src="${themeSwitch.checked ? 'complex-dark-image.gif' : 'complex-light-image.gif'}" alt="Complex Content Image" class="content-image">
            <p>This is a complex content paragraph .</p>
        `;
    }
}


// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    switchContent();
});

// Listening for radio button changes
document.querySelectorAll('input[name="content"]').forEach((radio) => {
    radio.addEventListener('change', switchContent);
});

