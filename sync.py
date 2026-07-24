import re

def extract_block(text, start_tag, end_tag):
    pattern = re.compile(rf"({start_tag}.*?{end_tag})", re.DOTALL | re.IGNORECASE)
    match = pattern.search(text)
    return match.group(1) if match else None

def sync_page(target_file, source_text):
    with open(target_file, 'r', encoding='utf-8') as f:
        target_text = f.read()

    # Extract source blocks
    head_block = extract_block(source_text, "<head>", "</head>")
    nav_block = extract_block(source_text, "<nav[^>]*>", "</nav>")
    
    footer_block = extract_block(source_text, "<!-- Footer -->", "</footer>\n    </div>")

    if not head_block or not nav_block or not footer_block:
        print(f"Failed to extract blocks for {target_file}")
        return

    # Replace target blocks
    target_text = re.sub(r"<head>.*?</head>", head_block, target_text, flags=re.DOTALL | re.IGNORECASE)
    target_text = re.sub(r"<nav[^>]*>.*?</nav>", nav_block, target_text, flags=re.DOTALL | re.IGNORECASE)
    
    # Replace footer in target (look for old footer pattern)
    target_text = re.sub(r"<!-- Footer -->.*?</footer>", footer_block, target_text, flags=re.DOTALL | re.IGNORECASE)
    
    # Customize title for specific page
    if "services.html" in target_file:
        target_text = re.sub(r"<title>.*?</title>", "<title>Ugency | Premium Digital Services</title>", target_text)
    elif "portfolio.html" in target_file:
        target_text = re.sub(r"<title>.*?</title>", "<title>Ugency | Our Work</title>", target_text)
    elif "contact.html" in target_file:
        target_text = re.sub(r"<title>.*?</title>", "<title>Ugency | Contact Us</title>", target_text)

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(target_text)
    print(f"Successfully synced {target_file}")

if __name__ == "__main__":
    with open('index.html', 'r', encoding='utf-8') as f:
        source_text = f.read()
    
    sync_page('services.html', source_text)
    sync_page('portfolio.html', source_text)
    sync_page('contact.html', source_text)
