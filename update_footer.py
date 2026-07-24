import os
import glob
import re

html_files = glob.glob('/home/fawas/.gemini/antigravity/scratch/ugency/*.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # We want to replace the block starting with `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pt-12 border-t border-gray-800">`
    # up to just before `<!-- Legal Footer -->`

    # Use a regex to find the block
    pattern = re.compile(
        r'(\s*)<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pt-12 border-t border-gray-800">.*?(?=\s*<!-- Legal Footer -->)',
        re.DOTALL
    )

    def replace_block(match):
        indent = match.group(1)
        replacement = f'''{indent}<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pt-12 border-t border-gray-800 text-center md:text-left">
{indent}    <div class="flex flex-col items-center md:items-start">
{indent}        <div class="flex items-center justify-center md:justify-start">
{indent}            <img src="/home/fawas/.gemini/antigravity/brain/aa234602-19aa-439e-81a8-066e07bbb8c4/media__1784866428237.png" alt="Ugency Logo" class="h-[80px] md:h-[120px] w-auto object-contain scale-110 origin-center md:origin-left">
{indent}        </div>
{indent}        <p class="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Premium digital marketing and software development agency driving growth for modern brands.</p>
{indent}        <ul class="flex justify-center md:justify-start py-6 gap-4">
{indent}            <li><a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-xl text-white hover:bg-[#3F51FF] hover:-translate-y-1 transition-all duration-300"><i class="ph-fill ph-facebook-logo"></i></a></li>
{indent}            <li><a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-xl text-white hover:bg-[#3F51FF] hover:-translate-y-1 transition-all duration-300"><i class="ph-fill ph-instagram-logo"></i></a></li>
{indent}            <li><a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-xl text-white hover:bg-[#3F51FF] hover:-translate-y-1 transition-all duration-300"><i class="ph-fill ph-linkedin-logo"></i></a></li>
{indent}        </ul>
{indent}    </div>
{indent}    <div class="flex flex-col items-center md:items-start">
{indent}        <p class="text-sm font-black uppercase text-gray-500 tracking-widest">Pages</p>
{indent}        <ul class="text-base flex flex-col items-center md:items-start gap-3 mt-6 font-medium">
{indent}            <li><a href="index.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Home</a></li>
{indent}            <li><a href="services.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Services</a></li>
{indent}            <li><a href="portfolio.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Our Works</a></li>
{indent}            <li><a href="contact.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Contact</a></li>
{indent}        </ul>
{indent}    </div>
{indent}    <div class="flex flex-col items-center md:items-start">
{indent}        <p class="text-sm font-black uppercase text-gray-500 tracking-widest">Services</p>
{indent}        <ul class="text-base flex flex-col items-center md:items-start gap-3 mt-6 font-medium">
{indent}            <li><a href="services.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Branding & UI/UX</a></li>
{indent}            <li><a href="services.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Custom Software</a></li>
{indent}            <li><a href="services.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">Digital Marketing</a></li>
{indent}            <li><a href="services.html" class="foot-underline-hover-effect text-gray-300 hover:text-white transition-colors w-fit">SEO & Automation</a></li>
{indent}        </ul>
{indent}    </div>
{indent}    <div class="flex flex-col items-center md:items-start">
{indent}        <p class="text-sm font-black uppercase text-gray-500 tracking-widest">Contact</p>
{indent}        <p class="text-base mt-6 text-gray-300 leading-relaxed font-medium">
{indent}            Calicut & Kochi,<br>
{indent}            Kerala, India
{indent}        </p>
{indent}        <a href="mailto:ugency.in@gmail.com" class="inline-block text-xl mt-6 font-bold foot-underline-hover-effect text-white">ugency.in@gmail.com</a>
{indent}    </div>
{indent}</div>'''
        return replacement

    new_content = pattern.sub(replace_block, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"No changes for {filepath}")
