from bs4 import BeautifulSoup
from pprint import pprint
import json
soup = BeautifulSoup(open("ustawy.html", "rt").read(), features="html.parser")

results = soup.select('table tr td[align="left"] a[href^="/DU/"]')
dres = []
for r in results:
    link = "https://monitorpolski.gov.pl" + r["href"]
    name = r.text
    dres.append({
        "name": name,
        "link": link,
    })

open("ustawy.json", "wt").write(json.dumps(dres))