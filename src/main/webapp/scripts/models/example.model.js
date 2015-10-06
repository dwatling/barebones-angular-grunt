function Example(json) {
    if (json === undefined) {
	    json = {};
    }

	this.args = json.args;
	this.headers = json.headers;
	this.origin = json.origin;
	this.url = json.url;
}
