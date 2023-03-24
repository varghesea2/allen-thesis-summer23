from selenium import webdriver
import time

#launch Chrome in headless mode


def launch_chrome():
    #options = webdriver.chrome.options.Options() this line was giving issues
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(options=options)
    return driver

#launching Chrome and running background.js


def run_background_js(url):
    driver = launch_chrome()
    driver.get(url)
    # Inject the background.js code into the page
    driver.execute_script(open('background.js').read())
    # Wait for the code to finish running
    time.sleep(10)
    # Get the results of the code
    result = driver.execute_script('return window.gEntries')
    print(f'this is the value of result {result}')
    driver.close()
    return result


#running on list of websites
websites = ['https://www.yahoo.com', 'https://www.msn.com']
for website in websites:
    result = run_background_js(website)
    print(result)
