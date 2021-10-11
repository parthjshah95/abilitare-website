import os
import datetime
import shutil

domain = "abilitare.com"

def done():
    print("done")

def msg(message):
    print(dash, message, dots, dash)

now = str(datetime.datetime.now()).split(" ")[0]
dash = "\n--------------------------------------------\n"
dots = "..."

msg("cleaning old build files")
shutil.rmtree('docs', ignore_errors=True)
done()

msg("building source")
os.system("npm run build")
done()

msg("preparing docs")
os.rename('build/', 'docs/')
done()

msg("setting domain name to "+domain)
with open("docs/CNAME", "w+") as c:
    c.write(domain)
done()

msg("deploying to github pages")
os.system("git add .\\docs\\")
os.system("git commit -m 'released_on_"+now+"'")
os.system("git push")
done()

msg("completed deployment process")
