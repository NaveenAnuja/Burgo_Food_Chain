from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

replacements = {
    'index.html': [
        ('alt=" Burgo\'s signature plates"', 'alt="Burgo signature feast with biryani, curry and fresh sides"'),
        ('alt=" the Burgo dining room"', 'alt="Warm dining room at Burgo Food Chain"'),
        ('alt=" the Burgo bakery counter"', 'alt="Fresh bakes on the Burgo bakery counter"'),
        ('alt=" Iceburg Shisha Lounge"', 'alt="Iceburg Shisha Lounge evening atmosphere"'),
        ('alt=" Saivar Restaurant"', 'alt="Dining table at Saivar Restaurant"'),
        ('data-alt=" signature plates"', 'data-alt="Signature Burgo plates"'),
        ('alt=" signature plates"', 'alt="Signature Burgo plates"'),
        ('data-alt=" bakery items"', 'data-alt="Fresh bakery items"'),
        ('alt=" bakery items"', 'alt="Fresh bakery items"'),
        ('data-alt=" Iceburg Shisha Lounge"', 'data-alt="Iceburg Shisha Lounge"'),
        ('data-alt=" the dining room"', 'data-alt="The dining room at Burgo"'),
        ('alt=" the dining room"', 'alt="The dining room at Burgo"'),
        ('data-alt=" Saivar Restaurant dishes"', 'data-alt="Saivar Restaurant favourites"'),
        ('alt=" Saivar Restaurant dishes"', 'alt="Saivar Restaurant favourites"'),
    ],
    'about.html': [
        ('alt=" the Burgo dining room"', 'alt="Warm dining room at Burgo Food Chain"'),
    ],
    'experiences.html': [
        ('alt=" the Burgo bakery counter"', 'alt="Fresh bakes on the Burgo bakery counter"'),
        ('alt=" Iceburg Shisha Lounge"', 'alt="Iceburg Shisha Lounge evening atmosphere"'),
        ('alt=" Saivar Restaurant"', 'alt="Dining table at Saivar Restaurant"'),
    ],
}

for rel, pairs in replacements.items():
    path = ROOT / rel
    text = path.read_text(encoding='utf-8')
    for old, new in pairs:
        text = text.replace(old, new)
    path.write_text(text, encoding='utf-8')
    print('fixed', rel)
