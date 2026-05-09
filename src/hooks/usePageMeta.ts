import { useEffect } from "react";

type UsePageMetaOptions = {
  title: string;
  description: string;
  path: string;
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) {
    element.setAttribute("content", content);
  }
};

export const usePageMeta = ({ title, description, path }: UsePageMetaOptions) => {
  useEffect(() => {
    const baseUrl = "https://www.zyvoxautomations.com";
    const canonicalUrl = `${baseUrl}${path}`;

    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);

    const canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [description, path, title]);
};
