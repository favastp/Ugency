import os

html_files = ['index.html', 'services.html', 'portfolio.html', 'contact.html']

for file in html_files:
    if not os.path.exists(file):
        continue
    with open(file, 'r') as f:
        content = f.read()

    # 1. Update Tailwind config
    content = content.replace("primary: '#b3ed00',", "primary: '#1A23A4',\n                        cream: '#F6F5F0',\n                        dark: '#0D0E16',\n                        accent: '#bec2ff',")
    content = content.replace("// Neon Green Do Studio style", "// Deep Blue")
    
    # 2. General color replacements
    content = content.replace('bg-white', 'bg-cream')
    content = content.replace('bg-black', 'bg-primary')
    content = content.replace('text-black', 'text-dark')
    
    # 3. Fix contrast issues (since bg-black is now bg-primary, primary text on it is invisible)
    content = content.replace('text-primary">Together.', 'text-accent">Together.')
    content = content.replace('text-primary mt-2', 'text-accent mt-2') 
    content = content.replace('border-t-4 border-primary', 'border-t-4 border-accent')
    content = content.replace('selection:bg-primary selection:text-dark', 'selection:bg-primary selection:text-cream')
    content = content.replace('<span class="text-primary text-6xl tracking-tighter">UGENCY.</span>', '<span class="text-cream text-6xl tracking-tighter">UGENCY.</span>')
    content = content.replace('<i class="ph-fill ph-quotes text-primary', '<i class="ph-fill ph-quotes text-accent')
    
    # Fix the "Start a Project" button in footer
    content = content.replace('btn-primary bg-cream text-dark hover:bg-primary', 'btn-primary bg-cream text-dark hover:bg-dark hover:text-white')
    
    # Fix the numbers in services.html
    content = content.replace('bg-primary text-dark', 'bg-primary text-cream')
    
    # Fix hover states in the dark services section on home page
    content = content.replace('group-hover:text-primary', 'group-hover:text-accent')
    
    # Fix the rocket icon in index.html
    content = content.replace('bg-primary/20', 'bg-accent/20')
    content = content.replace('border-primary/50', 'border-accent/50')
    content = content.replace('text-6xl text-primary', 'text-6xl text-accent')

    # Fix footer hover states
    content = content.replace('hover:text-primary', 'hover:text-accent')

    with open(file, 'w') as f:
        f.write(content)

# Update styles.css
if os.path.exists('styles.css'):
    with open('styles.css', 'r') as f:
        css = f.read()

    css = css.replace('--primary-accent: #b3ed00;', '--primary-accent: #1A23A4;')
    css = css.replace('--bg-dark: #000000;', '--bg-dark: #1A23A4;')
    css = css.replace('--bg-light: #ffffff;', '--bg-light: #F6F5F0;')
    css = css.replace('--text-dark: #000000;', '--text-dark: #0D0E16;')
    
    # Fix btn-primary text color in CSS
    css = css.replace('color: var(--bg-dark);', 'color: var(--bg-light);')

    with open('styles.css', 'w') as f:
        f.write(css)

print("Theme updated successfully.")
