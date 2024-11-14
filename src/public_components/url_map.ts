import * as URL_UTIL from './url-utility';

export function urlFor(
  endpoint: string, parameters?: any, _external?: any) {
  /* Javascript port of the flask function url_for. Takes an endpoint (e.g.
      the name of a flask view function), and an object containing arguments
      that should be passwed to that endpoint, and returns a URL string that
      will cause such endpoint to be invoked when visited. As with url_for,
      any extra parameters will be added to the query string portion of the
      URL.
      This function rellies on the global `window.json_url_map` which contains
      a description of the endpoints and routes that the server supports, and
      is supposed to be inserted into the template by the server (see the
      jinja2 macro common_layout_js).
      example usage:
          console.log(urlFor('update_client_drafting_files', {id: 2}));
   */

  let entry;
  let args;
  let arg;
  let value;
  let search;
  let rule;
  let i;
  let queryAdded = false;
  const host = parameters && parameters.host;

  // both number and number liked string should be considered as valid value
  const isInteger = (x: any) => /^\d+$/.test(x);

  if (!Object.prototype.hasOwnProperty.call(URL_UTIL.jsonUrlMap, endpoint)) {
    throw 'no such endpoint ' + endpoint;
  }
  entry = (URL_UTIL as any).jsonUrlMap[endpoint];
  args = entry.args;
  rule = entry.rule;
  function replacer(value: any) {
    return function (match: any) {
      let type = match.substr(1, match.indexOf(':') - 1);
      if (!type) {
        throw 'could not find type tag';
      }
      switch (type) {
      case 'int':
        if (!isInteger(value)) {
          throw 'non integer value ' + value;
        }
        break;
      case 'string':
        if (value.indexOf('/') !== '-1') {
          throw 'invalid value for url string type' + value;
        }
        break;
      case 'path':
        break;
      default:
        throw 'unknown type tag ' + type;
      }
      return String(value);
    };
  }
  for (i = 0; i < args.length; i++) {
    arg = args[i];
    if (!Object.prototype.hasOwnProperty.call(parameters, arg)) {
      throw 'missing parameter ' + arg;
    }
    value = parameters[arg];
    search = new RegExp('<(int|string|path):' + arg + '>', 'i');
    rule = rule.replace(search, replacer(value));
    delete parameters[arg];
  }
  for (arg in parameters) {
    if (Object.prototype.hasOwnProperty.call(parameters, arg) &&
            parameters[arg] !== undefined) {
      if (!queryAdded) {
        rule += '?';
        queryAdded = true;
      }
      rule += encodeURIComponent(arg) + '=' +
                encodeURIComponent(parameters[arg]) + '&';
    }
  }
  if (queryAdded) {
    rule = rule.slice(0, -1);
  }
  if (_external) {
    if (host) {
      return `${URL_UTIL.httpProtocol}${host}${rule}`;
    } else {
      return `${URL_UTIL.httpProtocol}${URL_UTIL.frontendUri.slice(0, -1)}${rule}`;
    }
  }
  return rule;
}

export function externalUrlFor(endpoint: string, parameters?: any) {
  return urlFor(endpoint, parameters, true);
}

export function routeFor(endpoint: string) {
  const entry = (URL_UTIL as any).jsonUrlMap[endpoint];
  return entry.route;
}

export function routeForPublicStore(endpoint: string, isPublicHost?: boolean) {
  const prefix = isPublicHost ? 'public_host_' : 'domain_uri_';
  const entry = (URL_UTIL as any).jsonUrlMap[`${prefix}${endpoint}`];
  return entry.route;
}

function currentHost() {
  return typeof window !== 'undefined' && window.location.host ? window.location.host : '';
}

export function publicUrlWithSubDomain(
  subdomain: string, endpoint: any, parameters: any, _external?: any) {
  let updatedEndpoint = 'public_host_' + endpoint;
  let updatedParameters = parameters;

  updatedParameters.host = `${subdomain}.${URL_UTIL.frontendUri.slice(0, -1)}`;
  delete updatedParameters.id;
  return urlFor(updatedEndpoint, updatedParameters, _external);
}


export function publicUrlWithHost(
  host: string, endpoint: any, parameters: any) {
  let updatedEndpoint = 'public_host_' + endpoint;
  let updatedParameters = parameters;

  updatedParameters.host = host;
  delete updatedParameters.id;
  return urlFor(updatedEndpoint, updatedParameters);
}

export function publicUrlFor(endpoint: string, parameters: any) {
  let host = currentHost();
  let updatedEndpoint = endpoint;
  if (host !== URL_UTIL.frontendUri.slice(0, -1)) {
    // Will return a url with the host added an the domain id removed.
    return publicUrlWithHost(host, updatedEndpoint, parameters);
  }
  updatedEndpoint = 'domain_uri_' + endpoint;
  return urlFor(updatedEndpoint, parameters);
}

export function frontendUrlFor(endpoint: string, parameters?: any) {
  // Prepends the frontend URI to the urlFor function.
  const frontend = `${URL_UTIL.httpProtocol}${URL_UTIL.frontendUri}`;
  return frontend + urlFor(endpoint, parameters);
}

export function publicFrontendUrlFor(
  subdomain: string, endpoint: string, parameters: any) {
  // Prepends the frontend URI to the urlFor function.
  let frontend = `${URL_UTIL.httpProtocol}${subdomain}.`;
  frontend += String(URL_UTIL.frontendUri);
  frontend = frontend.slice(0, -1);
  return frontend + publicUrlWithSubDomain(subdomain, endpoint, parameters);
}
