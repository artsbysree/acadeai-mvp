import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shareToLinkedIn(
  title: string,
  description: string,
  hashtags: string[] = ["AcadeAI", "Learning", "CareerDevelopment"]
) {
  const fullMessage = `${title}\n\n${description}\n\n${hashtags.map((tag) => `#${tag}`).join(" ")}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodedMessage}`;

  // Open LinkedIn in a new window
  window.open(linkedInUrl, "linkedin-share", "width=600,height=600");
}
