using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace InternetShowcase.Infrastructure.Extensions
{
    public static class UrlHelperExtensions
    {
        public static string AbsoluteUrl(this IHttpContextAccessor httpContextAccessor,
            string relativeUrl,
            object parameters = null)
        {
            var request = httpContextAccessor.HttpContext.Request;
            var hostUrl = request.Host;

            var url = new Uri(new Uri($"{request.Scheme}://{hostUrl}"), relativeUrl).ToString();

            if(parameters != null)
            {
                url = Microsoft.AspNetCore.WebUtilities.QueryHelpers.AddQueryString(url, ToDictionary(parameters));
            }
            return url;
        }
        private static Dictionary<string, string> ToDictionary(object obj)
        {
            var json = JsonConvert.SerializeObject(obj);
            return JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
        }
    }
}
