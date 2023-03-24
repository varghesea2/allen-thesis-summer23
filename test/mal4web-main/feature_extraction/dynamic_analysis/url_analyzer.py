"""
"""
from dataclasses import dataclass
import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from typing import List

@dataclass
class URLAnalyzer:
    url: str 
    driver = None

    def __post_init__(self):
        self.initialize_chrome()

    def initialize_chrome(self):
        # Obtain Chrom console logs
        d = DesiredCapabilities.CHROME
        d['goog:loggingPrefs'] = { 'browser':'ALL' }
        self.driver = webdriver.Chrome()
        # Load dynamic extension
        extension_path = os.path.abspath("dynamic_analysis_extension.crx")
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_extension(extension_path)
        self.driver = webdriver.Chrome(options=chrome_options, desired_capabilities=d)

    def load_url(self) -> str:
        # Load an url and return a session id 
        self.driver.get(self.url)
        return self.driver.session_id 

    def extract_api_calls(self) -> List[str]:
        # Extract api calls from the console log
        api_calls = [i for i in self.driver.get_log('browser')]
        return api_calls

    def run_js_script(self, script_path: str) -> List[str]:
        # Execute a js script and get api calls
        self.load_url()
        self.driver.execute_script(open(script_path).read())
        api_calls = self.extract_api_calls()
        return api_calls



