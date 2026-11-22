## 1. Karura as an Angular Project Basics

Practicing Angular with an basic-educationmanagement system, tutorial from <https://www.youtube.com/watch?v=WVw4ZXoWfaM&list=PL7JmcZV0UQtXXy5vfPPDMqojC9f7mu_YN&index=15>.

## Development server

To start a local development server, run: ng serve

Once the server is running, open your browser and navigate to `http://localhost:4200/`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run: ng generate component component-name. For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run: ng generate --help

## Building

To build the project run: ng build. This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command: ng test

## Running end-to-end tests

For end-to-end (e2e) testing, run: ng e2e. Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 2. KaruraEmployeesMIS

This is an basic-educationmanagement application in Angular 18, key modules:
~ Login Module (Signup Too)
~ Dashboard
~ Employee Portal
~ Project Portal
~ Project Employee Portal

API: <https://projectapi.gerasim.in/index.html>
UI Template: <https://github.com/voidChetan/youTube_project_html_templates/tree/main/EmployeManagement>

Styling install Bootstrap and Fontawesome. Add to package.lock.json and angular.json

## 3. DOTNET Database connection

This will handle secure login and sign up and use JWS Token Authentication. Tutorial being followed <https://www.youtube.com/watch?v=5oVFQU3Pb_g>

Pages or rather major components:
~ Login (emailId +password)
~ Sign up/Create a new admin (Username + Full Name + Mobile Number + Email Address + Password)
~ Two-Factor Authentication (2FA)
~ Password recovery process when user forgets password

Setting up Postgres Admin, it has been updated from 9.8 to 9.12 so a new installation has to be done.
Configure database and table values to use to connect to the database.

## 4. Testing and Queries

Saved PostgreSQL queries that can be resused for future projects.
Saved Postman requests for testing at each and every step for CI/CD in the project.

## 5. Troubleshooting dashboard and institution requests

- Use the browser's **DevTools → Network → Fetch/XHR** after signing in. Open the failed request and check the URL, query parameters, HTTP status, and response. The console message `Unchecked runtime.lastError: The message port closed before a response was received` can come from an extension. Use the Network response to diagnose the API request.
- Angular runs at `http://localhost:4200` and the local API at `http://localhost:5215`. Restart the API after backend changes. For a CORS error or Angular status `0`, check the API listener and the browser origin. For `401` or `403`, sign in again and check that the request has a bearer token and the expected account role.
- The HOI dashboard calls `GET /api/BasicEducation/GetSchool/{institutionId}`. Confirm that login returns an institution ID linked to an existing school.
- County and sub-county pages first load `/api/county-education/profile` or `/api/sub-county-education/profile`. A `404` here after authentication means the account needs an active location mapping. The existence of a row in `Users` only confirms the account exists.
- A Postman call with a manually supplied location tests the list query. To reproduce the browser flow, fetch the profile with the same role's login token and then replay the browser's exact list URL and parameters. SCDE lists send both `county` and `subCounty`. The county parameter is optional for existing Postman sub-county searches.
- If the list returns `200` with an empty `schools` array, compare the location and workflow status with a known school. Registered and onboarded lists ask for `status=approved`. The county pending list starts with `Pending`. Sub-county pending `All` includes non-approved statuses. The API ignores case and surrounding whitespace in status filters. If the response contains rows but the screen is empty, reset the table search and filters to `All`, then apply filters one at a time.
- Before calling a change complete, sign in as HOI, CDE, and SCDE. Confirm a known school on the HOI dashboard, then check both pending and approved rows on the county and sub-county pages. Apply a filter and clear it to verify the full list returns. Use accounts outside the original test locations to catch hard-coded defaults.
