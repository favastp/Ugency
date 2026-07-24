import os
import glob

def revert_theme():
    directory = '/home/fawas/.gemini/antigravity/scratch/ugency'
    html_files = glob.glob(os.path.join(directory, '*.html'))
    
    replacements = {
        'bg-[#0C0C0C]': 'bg-white',
        'bg-[#0C0C0C]/80': 'bg-white/90',
        'text-light': 'text-gray-800',
        'text-[#D7E2EA]': 'text-gray-900',
        'text-[#D7E2EA]/60': 'text-gray-600',
        'text-white': 'text-gray-900',
        'border-gray-800': 'border-gray-200',
        'border-gray-700': 'border-gray-300',
        'text-gray-300': 'text-gray-600',
        'text-gray-400': 'text-gray-600',
        'text-gray-500': 'text-gray-500',
        'bg-gray-900/50': 'bg-gray-50',
        'bg-[#ffffff]': 'bg-[#F7F8FC]',
        'bg-[#FFFFFF]': 'bg-[#F7F8FC]',
        'mix-blend-screen': '',
        'border-[rgba(215,226,234,0.15)]': 'border-gray-200'
    }

    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Apply replacements
        for old, new in replacements.items():
            content = content.replace(old, new)
            
        # Specific fixes
        # Preloader text should probably stay dark/light depending on bg
        content = content.replace('id="preloader">\n        <div class="text-gray-900', 'id="preloader">\n        <div class="text-[#0D0E16]')
        
        # Hero Image brightness and blur adjustment for light theme
        content = content.replace('blur-sm brightness-50', 'blur-sm brightness-90')
        
        # Navigation text color fix (was text-light -> text-gray-800, let's make it text-[#0D0E16])
        content = content.replace('text-gray-800', 'text-[#0D0E16]')

        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(content)

if __name__ == '__main__':
    revert_theme()
    print("Theme successfully reverted to Light (Cobalt/Electric Blue).")
