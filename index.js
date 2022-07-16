import { TTLCache } from "@brokerloop/ttlcache"

const cache = new TTLCache({
    ttl: 3600,
    maxSize: 2048,
})

console.log("[i] starting dami on port 8000");

export default {
    port: 8000,
    async fetch(request) {
        const path = request.url.split('/');
        let redirectUrl = path.slice(5).join('/');
        if (!redirectUrl.match(/^(http|https):/)) {
            redirectUrl = `https://${redirectUrl}`;
        };
        if (request.method === 'GET') {
            let cached;
            if (cached = cache.get(redirectUrl)) { 
                return new Response(cached);
            }
            const res = await (await fetch(redirectUrl)).text();
            cache.set(redirectUrl, res);
            return new Response(res);
        } else if (request.method === 'OPTIONS') {
            let res = new Response();
            res.headers.set('Access-Control-Allow-Origin', '*');
            res.headers.set('Access-Control-Allow-Headers', request.headers['access-control-request-headers'] || '');
            res.headers.set('Access-Control-Allow-Methods', request.headers['access-control-request-methods'] || '');
            return res
        } else {
            return Response.error()
        }
    }
}