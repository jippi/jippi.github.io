desc "Commit _site/"
task :commit do
  system("git checkout develop")

  puts "\n## jekyll build"
  status = system("jekyll build")
  puts status ? "Success" : "Failed"

  puts "\n## Staging modified files"
  status = system("git add -A")
  puts status ? "Success" : "Failed"

  puts "\n## Committing a site build at #{Time.now.utc}"
  message = "Build site at #{Time.now.utc}"

  status = system("git commit -m \"#{message}\"")
  puts status ? "Success" : "Failed"

  puts "\n## Pushing commits to remote"
  status = system("git push origin develop")
  puts status ? "Success" : "Failed"

  system("git checkout develop")
end

desc "Deploy _site/ to master branch"
task :deploy do
  system("git checkout develop")

  puts "\n## Deleting master branch"
  status = system("git branch -D master")
  puts status ? "Success" : "Failed"

  puts "\n## Creating new master branch and switching to it"
  status = system("git checkout -b master")
  puts status ? "Success" : "Failed"

  puts "\n## Forcing the _site subdirectory to be project root"
  status = system("git filter-branch --subdirectory-filter _site/ -f")
  puts status ? "Success" : "Failed"

  puts "\n## Switching back to develop branch"
  status = system("git checkout develop")
  puts status ? "Success" : "Failed"

  puts "\n## Pushing all branches to origin"
  status = system("git push --all --force origin")
  puts status ? "Success" : "Failed"

  system("git checkout develop")
end

desc "Commit and deploy _site/"
  task :commit_deploy => [:commit, :deploy] do
end
