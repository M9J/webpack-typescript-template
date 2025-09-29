### Enable Github Actions to automatically build and deploy to Github Pages on every push to repository

###### *This is optional*

If you created a public repository from this template, this repository also contains Github Actions to build and deploy to Github Pages on every push. By default, in a new repository, such kind of actions won't work and will fail as Github Actions by default only has read permission to its repository. This permission have to be allowed manually by the owner of the new repository for the Github Action to work properly.

Go to your repository's `Settings` > `Actions` > `General`:

Select `Read and write permissions` (This is required as the Github Actions creates a new branch named `build` on this same repository with the generated build, which is then used to deploy to Github Pages. You can review the action code inside `.github/workflows/ directory` in your repository.)

![Read and write permission](assets/read-and-write-permission.png)

Once saved, confirm your Github Actions is success:

![Github Actions](assets/actions.png)

![Action Workflow](assets/action-workflow.png)

If seeing success, confirm `build` branch was created in your repository automatically after this Github Action execution.

![Build Branch Confirmation](assets/branch-confirmation.png)

Now, you can enable Github Pages, so that generated build currently stored in `build` branch can be deployed to Github Pages.

Go to your repository's `Settings` > `Pages`:

Make sure Source is `Deploy from a branch` and Branch is `build`.

![Github Pages Configuration](assets/pages-configuration.png)

Click `Save` and wait for the `Pages Build and Deployment Action` to finish.

Once done, check your repository's Github Pages URL to see the deployed build.

*Feel free to change this Github Actions flow to deploy directly after Github Action's Build flow without requiring a separate build branch.*