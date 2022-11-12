import MenuIcon from '@mui/icons-material/Menu';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import { AppBar, Avatar, Box, Container, Divider, IconButton, Menu, Toolbar, Tooltip, Typography } from '@mui/material';
import { pages } from '../../routes/Rotas';
import { LanguageSetting } from './LanguageSetting';
import { MenuItemAppBar } from './MenuItemAppBar';
import { ToggleThemeSetting } from './ToggleThemeSetting';
import { useMenuAppBar } from './useMenuAppBar';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const MenuAppBar = () => {

  const { anchorElNav, anchorElUser, handleOpenNavMenu, handleOpenUserMenu, handleCloseNavMenu, handleCloseUserMenu } = useMenuAppBar();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SpatialAudioOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LB Talks
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItemAppBar key={page.to} label={page.label} to={page.to} />
              ))}
            </Menu>
          </Box>
          <SpatialAudioOffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LB Talks
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <MenuItemAppBar key={page.to} label={page.label} to={page.to} isButton />
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="unnamed.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <ToggleThemeSetting />
              <Divider />
              <LanguageSetting isLanguage />
              <LanguageSetting />
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )

}