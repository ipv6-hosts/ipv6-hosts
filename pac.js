function FindProxyForURL(url, host) {
	PROXY = "PROXY yourhttpproxy:80";
	DEFAULT = "DIRECT";

	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?appspot\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?blogspot\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(\d{2,}\.)docs\.google\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?googleapis\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?googlecode\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?googlegroups\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?googlemashups\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?ig\.ig\.gmodules\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?a\.orkut\.gmodules\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)doc-(.{5})-docs\.googleusercontent\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\-)?a-fc-opensocial\.googleusercontent\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)images(\d{2,})-focus-opensocial\.googleusercontent\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(\d{2,}\.)-wave-opensocial\.googleusercontent\.com/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?au\.doubleclick\.net/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?de\.doubleclick\.net/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?fr\.doubleclick\.net/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?jp\.doubleclick\.net/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?uk\.doubleclick\.net/i.test(url)) return PROXY;
	if(/^[\w\-]+:\/+(?!\/)(www|ssl)\.google-analytics\.net/i.test(url)) return DEFAULT;
	if(/^[\w\-]+:\/+(?!\/)(?:[^\/]+\.)?google-analytics\.net/i.test(url)) return PROXY;
	return DEFAULT;
}