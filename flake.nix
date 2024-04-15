{
  description = "solur";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/ARM Linux
        "aarch64-linux" # 64-bit AMD Linux
        "x86_64-darwin" # 64-bit Intel/ARM macOS
        "aarch64-darwin" # 64-bit Apple Silicon
      ];

      # Helper to provide system-specific attributes
      nameValuePair = name: value: { inherit name value; };
      genAttrs = names: f: builtins.listToAttrs (map (n: nameValuePair n (f n)) names);
      forAllSystems = f: genAttrs allSystems (system: f {
        pkgs = import nixpkgs {
          inherit system;
        };
      });
    in
    {
      devShells = forAllSystems ({ pkgs }:
        {
          default = pkgs.mkShell {
            packages = with pkgs; [
                # General dev tools
                git

                # NodeJS development
                nodejs_18
                yarn

                # Infrastructure-as-Code tools
                pulumi
                pulumiPackages.pulumi-language-nodejs
                
                # Cluster tooling
                minikube
                kubectl
            ];

            PROJECT_NAME = "solur";

            shellHook = ''
                echo $ Started devshell for $PROJECT_NAME
                echo
            '';
          };
        }
      );
    };
}