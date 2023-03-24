import os
import pandas as pd
import pytest
from url_analyzer import URLAnalyzer


def test_load_url():
    url = "https://stackoverflow.com/"
    analyzer = URLAnalyzer(url)
    session_id = analyzer.load_url()
    assert session_id

def test_load_url_with_extension():
    url = "https://stackoverflow.com/"
    analyzer = URLAnalyzer(url)
    assert analyzer.load_url_with_extension()  

def test_extract_chrome_logs():
    url = "file:///" + os.path.abspath("hello_world.html")
    analyzer = URLAnalyzer(url)
    assert analyzer.extract_chrome_logs()

def test_run_js_script():
    url = "file:///" + os.path.abspath("hello_world.html")
    print(url)
    analyzer = URLAnalyzer(url)
    js_script_path = os.path.abspath("../../crawl_dataset/javascript-malware-collection/2016/20160129/20160129_73b5992d1cecdaf0fc4d9a26735d9462.js")
    print(js_script_path)
    result_path = os.path.abspath("results/apis.csv")
    analyzer.run_js_script(js_script_path)

    pd.DataFrame(results).to_csv(result_path)
    assert api_calls

def test_run_js_script_failed():
    url = "file:///" + os.path.abspath("hello_world.html")
    print(url)
    analyzer = URLAnalyzer(url)
    js_script_path = os.path.abspath("../../crawl_dataset/javascript-malware-collection/2016/20160129/20160129_73b5992d1cecdaf0fc4d9a26735d9462.js")
    print(js_script_path)
    result_path = os.path.abspath("results/apis.csv")
    analyzer.run_js_script(js_script_path)

    pd.DataFrame(results).to_csv(result_path)
    assert api_calls

def test_run_url():
    url = "https://stackoverflow.com/"
    analyzer = URLAnalyzer(url)
