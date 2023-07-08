import string
import random
from datetime import datetime, timedelta
import os

# SETTINGS #
NUM_FILES                           = 20
DESCRIPTION_POSSIBILITY_PERCENTAGE  = 50
# FOLDER_NAME                         = "Blog_Examples" #Comment to run without folder
RELATIVE_PATH                       = "files/blog"

sentence = "Korba – element mechanizmów dźwigniowych służący do przeniesienia ruchu obrotowego ramienia na ruch obrotowy wału. Korba ma zwykle konstrukcję w kształcie jednokrotnie lub dwukrotnie zagiętego pręta zaklinowanego jednym końcem na osi wału. Przykładem jest korba rowerowa, gdzie ruch stóp kolarza po obwodzie koła wymusza obrót suportu wokół osi. Ruch tego mechanizmu jest przekazywany przekładnią łańcuchową do koła napędowego. Odmianą korby jest też klamka drzwiowa. Korba jest jedną z maszyn prostych, złożeniem koła i dźwigni jednostronnej. Jest też elementem innej maszyny prostej, kołowrotu"

translator = str.maketrans("", "", string.punctuation)
clean_sentence = sentence.translate(translator)
words = clean_sentence.split()

def title():
    sentence = ' '.join(random.choices(words, k=random.randint(1, 4)))
    sentence = sentence.capitalize()
    return sentence

def content():
    num_sentences = random.randint(5, 40)
    content = ''
    for _ in range(num_sentences):
        sentence = ' '.join(random.choices(words, k=random.randint(3, 12)))
        sentence = sentence.capitalize() + '.'
        content += sentence
    return content

def date():
    start_date = datetime(2000, 1, 1)
    end_date = datetime(2022, 12, 31)

    random_date = start_date + timedelta(days=random.randint(0, (end_date - start_date).days))
    formatted_date = random_date.strftime("%d.%m.%Y")
    return(formatted_date)

def description():
    sentence = ' '.join(random.choices(words, k=random.randint(3, 14)))
    sentence = sentence.capitalize()
    return sentence


def descritonMaybe():
    if DESCRIPTION_POSSIBILITY_PERCENTAGE >= random.randint(1,100):
        return(f"description: {description()}\n")
    else:
        return("")

def page():
    return("---\n" +
        'title: "' + title() + '"\n' +
        'date: "' + date() + '"\n' +
        descritonMaybe() + "---\n\n" +
        "<!-- Przykładowy plik - wygenerowany automatycznie -->\n" +
        content() +
        "\n\n" + "    *exampleBlogGenerator.py*")

if "RELATIVE_PATH" in locals():
    RELATIVE_PATH += '/'
else:
    RELATIVE_PATH = ''

if "FOLDER_NAME" in locals():
    FOLDER_NAME += '/'
    # Tworzenie folderu
    os.makedirs(FOLDER_NAME)
else:
    FOLDER_NAME = ''

for i in range(NUM_FILES):
    filename = f"{RELATIVE_PATH}{FOLDER_NAME}blogFile{i+1}.md"
    
    with open(filename, "w", encoding="utf-8") as file:
        file.write(page())

    print(f"Created {filename}")


