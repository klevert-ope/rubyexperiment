import "@hotwired/turbo-rails";
import { Application } from "@hotwired/stimulus";
import "stylesheets/new";

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
