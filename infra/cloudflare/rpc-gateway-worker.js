export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const origin = request.headers.get("origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);

    if (allowed.length > 0 && !allowed.includes(origin)) {
      return new Response("Forbidden origin", { status: 403 });
    }

    const targetRpc = env.RPC_UPSTREAM;
    if (!targetRpc) {
      return new Response(
        JSON.stringify({ error: "RPC_UPSTREAM not configured" }),
        { status: 500, headers: { "content-type": "application/json" } }
      );
    }

    const bodyText = await request.text();

    const upstream = await fetch(targetRpc, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: bodyText
    });

    const responseHeaders = new Headers();
    responseHeaders.set("content-type", "application/json");
    if (origin) {
      responseHeaders.set("access-control-allow-origin", origin);
      responseHeaders.set("vary", "origin");
    }

    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: responseHeaders
    });
  }
};
