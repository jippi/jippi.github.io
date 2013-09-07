desc "Commit _site/"
task :commit do
  puts "\n## Checking out develop"
  status = system("git checkout -q develop")
  puts status ? "Success" : "Failed"

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
  status = system("git push -q origin develop")
  puts status ? "Success" : "Failed"
end

desc "Deploy _site/ to master branch"
task :deploy do
  puts "\n## Checking out develop"
  status = system("git checkout -q develop")
  puts status ? "Success" : "Failed"

  puts "\n## Deleting master branch"
  status = system("git branch -Dq master")
  puts status ? "Success" : "Failed"

  puts "\n## Creating new master branch and switching to it"
  status = system("git checkout -q -b master")
  puts status ? "Success" : "Failed"

  puts "\n## Forcing the _site subdirectory to be project root"
  status = system("git filter-branch --subdirectory-filter _site/ -f")
  puts status ? "Success" : "Failed"

  puts "\n## Switching back to develop branch"
  status = system("git checkout -q develop")
  puts status ? "Success" : "Failed"

  puts "\n## Pushing all branches to origin"
  status = system("git push -q --all --force origin")
  puts status ? "Success" : "Failed"
end

desc "Submit google sitemap"
task :sitemap do
  puts "\n## Submitting sitemap.xml to google"
  system("curl -i google.com/webmasters/tools/ping?sitemap=http%3A%2F%2Fcakephp.nu%2Fsitemap.xml")
end

desc "Build, Commit, deploy and notify google/"
  task :update => [:commit, :deploy, :sitemap] do
end