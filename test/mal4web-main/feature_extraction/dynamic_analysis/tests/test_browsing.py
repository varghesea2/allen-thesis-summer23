"""
This file contains tests for automatic browsing an url with the extension
enabled
"""
from browsing import Browsing
import sys
import os
import json


def load_extension(url):
    browsing = Browsing(url)
    extension_path = os.path.abspath("extension/")
    browsing.load_extension(extension_path)
    response = browsing.access_url()


def test_load_extension_google():
    print("TESTING...")
    load_extension("https://www.google.com")
