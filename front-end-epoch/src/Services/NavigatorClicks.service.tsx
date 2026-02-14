import type { MouseEvent } from "react";
export function handleHomeClick(event: MouseEvent) {
  event.stopPropagation();
  console.log("home");
}
export function handleExploreClick(event: MouseEvent) {
  event.stopPropagation();
  console.log("explore");
}
export function handleNotificationClick(event: MouseEvent) {
  event.stopPropagation();
  console.log("Notification");
}
